import PostModels from "@/models/PostModels"
import { api } from "./api"

const postTranslate  = async (data:PostModels) => {
    return api({
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/v2?key=${process.env.NEXT_PUBLIC_API_KEY}`,
        method:"POST",
        data
    })
}

const postService = {
    postTranslate
}

export default postService