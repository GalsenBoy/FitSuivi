import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
  hoverBtn?: string;
  onChange: (value: string) => void;
  onSave?: () => void;
};

export function ChartDialog({
  dialogTitle,
  label,
  btnContent,
  placeholder,
  onChange,
  onSave,
}: ChartDialogProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSaveDialog = () => {
    if (onSave) {
      onSave();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dialog-btn">Ajout {btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dialog-content">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
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
              onChange={handleInputChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={handleSaveDialog}
              className="dialog-btn"
              type="submit"
            >
              Enregistrer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
