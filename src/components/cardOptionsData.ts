import {
  ExternalLink,
  Copy,
  Pin,
  PinOff,
  Pencil,
  Archive,
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
    is_pinned: boolean
  };
};

export function getCardOptions(props: GetCardOptionsProp) {
  const { actions } = props;

  return [
    { label: "View", icon: ExternalLink, action: actions.onView },
    { label: "Copy URL", icon: Copy, action: actions.onCopy },
    { label: actions.is_pinned ? 'Unpin' : 'Pin', icon: actions.is_pinned ? PinOff : Pin , action: actions.onPin },
    { label: 'Edit', icon: Pencil, action: actions.onEdit },
    {
      label: "Archive",
      icon: Archive,
      action: () => console.log("Archive"),
      variant: "destructive" as const,
    },
  ];
}
