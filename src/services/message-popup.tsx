import swal from "sweetalert";

export function messagePopup(header: string, text: string, color: string) {
  swal(header, text, color);
}

export default messagePopup;
