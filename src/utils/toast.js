// import { Icon } from "@iconify/react/dist/iconify.js";
import { toast } from "sonner";

export function successToast(information) {
  return toast(information, {
    style: {
      backgroundColor: '#E6F3E7',
      color: '#003704'
    }
  })
}

export function infoToast(information) {
  return toast(information, {
    // icon: <Icon icon='material-symbols:info' fontSize={20} />,
    style: {
      textAlign: 'center',
      backgroundColor: '#0006B1',
      color: '#fff',
    },
  })
}

export function errorToast(information) {
  return toast(information, {
    style: {
      textAlign: 'center',
      backgroundColor: '#EF4444',
      color: '#000'
    }
  })
}

export function warningToast(information) {
  return toast(information, {
    style: {
      backgroundColor: '#F59E0B',
      color: '#000'
    }
  })
}
