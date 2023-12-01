import getMessagePosition from "../utils/getMessagePosition";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Message({ message }) {
  const { user } = useAuthContext();
  return (
    <div
      className={`${getMessagePosition(
        message.author,
        user.uid
      )} p-1.5 px-2.5 rounded-lg w-fit text-secondary mb-2 text-sm`}
    >
      {message.content}
    </div>
  );
}
