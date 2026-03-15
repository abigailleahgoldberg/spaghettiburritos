import { redirect } from "next/navigation";

// The stories index redirects to the submit form.
// Individual stories live at /stories/[slug]#BASE64_DATA
export default function StoriesIndex() {
  redirect("/submit-drama");
}
