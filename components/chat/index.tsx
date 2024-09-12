import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSeenSvg } from "@/lib/svgs";
import { formatDate } from "@/lib/utils";
import { ConversationType } from "@/types";
import { ImageIcon, Users, VideoIcon } from "lucide-react";
import React from "react";

type ChatProps = {
  conversation: ConversationType;
};

const Chat: React.FC<ChatProps> = ({ conversation }) => {
  const conversationImage = conversation.groupImage;
  const conversationName = conversation.groupName || "Private Chat";
  const lastMessage = conversation.lastMessage;
  const authUser = { _id: "user1" }; // This should be replaced with actual auth user data

  return (
    <>
      <div className="flex gap-2 items-center p-3 hover:bg-chat-hover cursor-pointer">
        <Avatar className="border border-gray-900 overflow-visible relative">
          {conversation.isOnline && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground" />
          )}
          <AvatarImage
            src={conversationImage || "/placeholder.png"}
            className="object-cover rounded-full"
          />
          <AvatarFallback>
            <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
          </AvatarFallback>
        </Avatar>
        <div className="w-full">
          <div className="flex items-center">
            <h3 className="text-xs lg:text-sm font-medium">
              {conversationName}
            </h3>
            <span className="text-[10px] lg:text-xs text-gray-500 ml-auto">
              {formatDate(conversation._creationTime)}
            </span>
          </div>
          <p className="text-[12px] mt-1 text-gray-500 flex items-center gap-1 ">
            {lastMessage.sender === authUser._id ? <MessageSeenSvg /> : ""}

            {conversation.participants.length > 2 && <Users size={16} />}
            {!lastMessage && "Say Hi!"}
            {lastMessage.messageType === "text" ? (
              <span className="text-xs">
                {lastMessage.content.length > 30
                  ? `${lastMessage.content.slice(0, 30)}...`
                  : lastMessage.content}
              </span>
            ) : null}
            {lastMessage.messageType === "image" && <ImageIcon size={16} />}
            {lastMessage.messageType === "video" && <VideoIcon size={16} />}
          </p>
        </div>
      </div>
      <hr className="h-[1px] mx-10 bg-gray-primary" />
    </>
  );
};

export default Chat;
