import { useState } from "react";

function Simple() {
  const [loading] = useState(false);
  if (loading) {
    return "Loading..................."
  }
  else {
    return "error accoured"
  }
}
export default Simple;