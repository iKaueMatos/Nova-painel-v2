import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function DayOrdersAmout() {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Total de pedidos (dia)
        </CardTitle>
        <DollarSign className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-6%</span>
          {" "} em relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  );
}