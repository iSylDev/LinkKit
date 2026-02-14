import {ExternalLink,
  Copy,
  Pin,
  Pencil,
  Archive,
  EllipsisVertical,} from 'lucide-react'


export const cardOptions = [
  { label: "View", icon: ExternalLink, action: () => console.log("View") },
  { label: "Copy", icon: Copy, action: () => console.log("Copy") },
  { label: "Pin", icon: Pin, action: () => console.log("Pin") },
  { label: "Edit", icon: Pencil, action: () => console.log("Edit") },
  { label: "Archive", icon: Archive, action: () => console.log("Archive"), variant: "destructive" as const },
]

export const badgeOptions = ['Reference', 'HTML', 'CSS', 'Javascript' ]