import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";

const ActionButtons: React.FC = () => {
  return (
    <>
      <AlertDialogButton text="Continuar" />
      <AlertDialogButton text="Detener" />
    </>
  );
};

const CancelAlertRecording: React.FC = () => {
  return (
    <AlertDialog
      title="Grabación en curso"
      description="Detenga la grabación, antes de abandonar."
      DialogActions={<ActionButtons />}
    />
  );
};

export default CancelAlertRecording;
