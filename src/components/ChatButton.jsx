import { Button } from "../shadcn/components/ui/button";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function ChatButton({ setChatIsOpen, setSelectedChat }) {
  const handleClick = () => {
    setSelectedChat(null);
    setChatIsOpen((prev) => !prev);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="h-16 w-16 bg-primary text-background fixed bottom-4 right-4 sm:right-[224px] rounded-full p-2.5 drop-shadow-xl"
      onClick={handleClick}
    >
      <ChatBubbleIcon className="h-8 w-8" />
    </Button>
  );
}
