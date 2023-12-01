import React from "react";

export default interface PopupProps {
    open:boolean;
    close?:(e:boolean) => void;
    children:React.ReactNode;
    position:any
}