import React from "react";
import {
  Dialog,
  DialogContent,
} from "@material-ui/core";

export default function CommitPopup(props) {
  const {children, openCommitPopup, setOpenCommitPopup } = props;
  return (
    <Dialog open={openCommitPopup} fullWidth="md">
      
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
