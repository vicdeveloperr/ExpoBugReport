import { Dialog, Portal } from "react-native-paper";

interface AlertDialogProps {
  visible: boolean;
  DialogActions: React.ReactNode;
  DialogContent: React.ReactNode;
  title: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  visible,
  DialogActions,
  DialogContent,
  title,
}) => {
  return (
    <Portal>
      <Dialog
        visible={visible}
      >
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          {DialogContent}
        </Dialog.Content>
        <Dialog.Actions>
          {DialogActions}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertDialog;
