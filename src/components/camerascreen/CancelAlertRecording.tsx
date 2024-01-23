import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";
import useRecordingEffects from "./hooks/useRecordingEffects";

const ActionButtons: React.FC = () => {
  const { onStopRecording } = useRecordingEffects();
  return (
    <>
      <AlertDialogButton
        containerStyles={{ marginRight: 10 }}
        text="Continuar"
      />
      <AlertDialogButton
        action={onStopRecording}
        text="Detener"
      />
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
