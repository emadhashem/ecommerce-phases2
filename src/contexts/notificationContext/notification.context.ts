import { createContext } from "react";


interface notificationContextType {
    newNotifi: any[];
    oldNotifi: any[];
    readNotifi: (id: any) => void
}

export const NotificationContext = createContext<notificationContextType>({
    newNotifi: [],
    oldNotifi: [],
    readNotifi: (id: any) => { },
})