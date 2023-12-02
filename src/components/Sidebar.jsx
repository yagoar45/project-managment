import { Button } from "../shadcn/components/ui/button";
import {
  CalendarIcon,
  ChatBubbleIcon,
  Cross2Icon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  InfoCircledIcon,
  LightningBoltIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Logo from "./Logo";
import { Separator } from "../shadcn/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../shadcn/components/ui/avatar";
import { useAuthContext } from "../hooks/useAuthContext";
import LabelSvg from "./Label";
import getInitials from "../utils/getInitials";

const userOptions = [
  {
    route: "/activity",
    name: "Atividade",
    icon: <LightningBoltIcon />,
  },
  {
    route: "/profile",
    name: "Meu perfil",
    icon: <PersonIcon />,
  },
];

const projectOptions = [
  {
    route: "/",
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    route: "/tasks",
    name: "Tarefas",
    icon: <FileTextIcon />,
  },
  {
    route: "/chats",
    name: "Conversas",
    icon: <ChatBubbleIcon />,
  },
  {
    route: "/calendar",
    name: "Calendário",
    icon: <CalendarIcon />,
  },
];

const labelOptions = [
  {
    value: "high",
    name: "Alta Prioridade",
    icon: <LabelSvg color="#f00" />,
  },
  {
    value: "medium",
    name: "Média Prioridade",
    icon: <LabelSvg color="orange" />,
  },
  {
    name: "Baixa Prioridade",
    icon: <LabelSvg color="#f7d372" />,
    value: "low",
  },
  {
    name: "Em Standby",
    icon: <LabelSvg color="#5abb54" />,
    value: "standby",
  },
];

export default function Sidebar({
  rerender,
  selectedPriority,
  setSelectedPriority,
}) {
  const navigate = useNavigate();
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="relative overflow-y-auto min-h-[calc(100vh_-_64px)] hidden sm:flex sm:flex-col sm:justify-between h-full w-[250px] bg-accent border border-border">
      <div className="fixed h-[calc(100vh_-_96px)] w-[250px] sm:flex-grow sm:flex sm:flex-col sm:justify-between">
        <div className="p-5">
          <Logo size="sm" />
        </div>
        <div className="flex gap-3 p-5">
          <Avatar>
            <AvatarImage src={user.photoURL} />
            <AvatarFallback className="bg-primary/50">
              {getInitials(user.displayName)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.displayName}</p>
            <p className="text-muted-foreground/75 text-sm">Premium account</p>
          </div>
        </div>
        {userOptions.map((option) => (
          <div
            key={option.route}
            role="button"
            className="px-5 py-1.5 flex items-center gap-3"
            onClick={() => navigate(option.route)}
          >
            {option.icon}
            <p className="text-md">{option.name}</p>
          </div>
        ))}

        <Separator className="my-4" />

        <h2 className="font-semibold text-xl px-5 mb-4">Projetos</h2>

        {projectOptions.map((option) => (
          <div
            key={option.route}
            role="button"
            className="px-5 py-1.5 flex items-center gap-3"
            onClick={() => navigate(option.route)}
          >
            {option.icon}
            <p className="text-md font-medium">{option.name}</p>
          </div>
        ))}

        <Separator className="my-4" />

        <h2 className="font-semibold text-xl px-5 mb-4">Etiqueta</h2>

        {labelOptions.map((option) => (
          <div
            key={option.value}
            role="button"
            className="px-5 py-1.5 flex items-center justify-between"
          >
            <div
              className="flex gap-3"
              onClick={() => setSelectedPriority(option.value)}
            >
              {option.icon}
              <p
                className={`text-md/90 ${
                  selectedPriority === option.value ? "font-semibold" : ""
                }`}
              >
                {option.name}
              </p>
            </div>
            {option.value === selectedPriority && (
              <Cross2Icon
                role="button"
                onClick={() => setSelectedPriority(null)}
              />
            )}
          </div>
        ))}

        <Separator className="my-4" />

        <div className="px-5">
          {" "}
          <Button
            size="noPadding"
            variant="ghost"
            onClick={handleLogout}
            className="opacity-50 py-2.5"
          >
            <InfoCircledIcon className="w-4 h-4 mr-2" />
            Central de Ajuda
          </Button>
          <Button
            size="noPadding"
            variant="ghost"
            onClick={handleLogout}
            className="opacity-50 py-2.5"
          >
            <ExitIcon className="w-4 h-4 mr-2" />
            Sair da conta
          </Button>
        </div>
        {rerender && <span className="hidden"></span>}
      </div>
    </nav>
  );
}
