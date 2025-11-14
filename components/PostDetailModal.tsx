import {Divider} from "@/components/Divider";
import {Modal} from "@/components/Modal";

interface PostDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PostDetailModal({isOpen, onClose}: PostDetailModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col ">
                <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">
                    Edit Post
                </button>
                <Divider></Divider>
                <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">
                    Delete Post
                </button>
                <Divider></Divider>
                <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">
                    Copy Link
                </button>
                <Divider></Divider>
                <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">
                    Add to Favourites
                </button>
                <Divider></Divider>
                <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">
                    Cancel
                </button>
            </div>
        </Modal>
    )
}