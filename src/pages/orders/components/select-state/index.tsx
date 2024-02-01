import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectState() {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="h-8 w-[188px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        estados
      </SelectContent>
    </Select>
  );
}
