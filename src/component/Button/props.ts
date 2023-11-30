export default interface ButtonProps {
    title:string;
    onClick?:(content:any) => void;
    type?:"button"|"submit"
}