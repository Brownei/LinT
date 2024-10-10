import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { infoToast } from "./toast";

let socket;

export const initializeSocket = (params) => {
  if (!socket) {
    socket = io('https://api.lintapp.com', {
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
  handleMessageWell,
) => {
  const queryClient = useQueryClient()
  useEffect(() => {
    const handleSocketMessage = (message) => {
      const newMessage = JSON.parse(message)
      queryClient.invalidateQueries({ queryKey: [queryKey] })

      if (eventType === 'new-message') {
        handleMessageWell(newMessage.conversationId)
      } else if (eventType === 'new-request') {
        handleMessageWell(newMessage.collaboratorsRequest.sender.fullName)
      } else if (eventType === 'new-post') {
        console.log('New Post dey!')
      } else if (eventType === 'accepted-request' || eventType === 'rejected-request') {
        infoToast('A request you sent was accepted or rejected!')
      }

      if (eventType === 'new-post') {
        setNewData((prev) => [newMessage, ...prev])

      } else {
        setNewData((prev) => [...prev, newMessage])
      }
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

