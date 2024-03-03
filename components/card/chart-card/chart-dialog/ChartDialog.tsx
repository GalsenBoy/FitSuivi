/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./chart-dialog.scss";

type ChartDialogProps = {
  dialogTitle: string;
  label: string;
  btnContent: string;
  placeholder?: string;
};

export function ChartDialog({
  dialogTitle,
  label,
  btnContent,
  placeholder,
}: ChartDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dialog-btn">{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="chart-dialog">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {label}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={placeholder}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="dialog-btn" type="submit">
            Enregistrer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
