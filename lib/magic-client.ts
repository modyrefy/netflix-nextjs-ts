import { Magic } from "magic-sdk";
const createMagic = () => {
    return (
        typeof window !== "undefined" &&
        new Magic(process.env.NEXT_PUBLIC_MAGIC_SERVER_PUBLIC_KEY !=null?process.env.NEXT_PUBLIC_MAGIC_SERVER_PUBLIC_KEY:"")
    );
};
export const magic = createMagic();
//console.log('magic setup',createMagic);
