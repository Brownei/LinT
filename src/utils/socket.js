import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { io } from "socket.io-client";

let socket;

export const initializeSocket = (params) => {
  if (!socket) {
    socket = io("http://localhost:3131", {
      query: {
        params: JSON.stringify(params),
      },
    });

    // Handle connection
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    console.error("Socket not initialized. Call initializeSocket first.");
  }
  return socket;
};


export const useSocketListener = (
  eventType,
  setNewData,
  queryKey,
  handleMessageWell
) => {
  const queryClient = useQueryClient()
  useEffect(() => {
    const handleSocketMessage = (message) => {
      const newMessage = JSON.parse(message)
      queryClient.invalidateQueries({ queryKey: [queryKey] })

      if (newMessage.conversationId) {
        handleMessageWell(newMessage.conversationId)
      } else if (newMessage.post) {
        handleMessageWell(newMessage.collaboratorsRequest.sender.fullName)
      }

      setNewData((prev) => [...prev, newMessage])
      console.log(`${eventType} Socket Message`, newMessage);
    };

    socket?.on(eventType, handleSocketMessage);

    // Clean up the socket listener
    return () => {
      socket?.off(eventType, handleSocketMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
};

