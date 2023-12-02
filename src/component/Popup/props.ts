import React from "react";

export default interface PopupProps {
    open:boolean;
    close?:() => void;
    children:React.ReactNode;
    position:any;
}