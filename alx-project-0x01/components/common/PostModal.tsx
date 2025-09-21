import { PostData, PostModalProps } from "@/interfaces";
import React from "react";

const PostModal: React.Fc<PostModalProps> = ({ onClose, onSubmit}) => {
    const [post, setPost] = useState<PostData>({
        userId: 1,
        title: "",
        body: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value} = e.target;
        setPost((prevPost) => ({...prevPost, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    };

    return (
        <div className="fixed onset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"></div>
    )
}