import {
  ExternalLink,
  Copy,
  Pin,
  Pencil,
  Archive,
  EllipsisVertical,
} from "lucide-react";


type GetCardOptionsProp = {
  id: string;
  url: string;
  actions: {
    onView: (e: React.MouseEvent<HTMLDivElement>) => void;
    onCopy: () => void;
    onPin: () => void;
    onEdit: () => void;
    onArchive: () => void;
  };
};

export function getCardOptions(props: GetCardOptionsProp) {
  const { actions } = props;

  return [
    { label: "View", icon: ExternalLink, action: actions.onView },
    { label: "Copy", icon: Copy, action: actions.onCopy },
    { label: "Pin", icon: Pin, action: actions.onPin },
    { label: 'Edit', icon: Pencil, action: actions.onEdit },
    {
      label: "Archive",
      icon: Archive,
      action: () => console.log("Archive"),
      variant: "destructive" as const,
    },
  ];
}
