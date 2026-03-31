const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbywpoY1WptngQRYrU7wsDycgPl2hR8j_xNoMQ1Ho7QUEyDikipLZJNU3CArKfhdBzF-/exec";

export async function submitToSheet(data: Record<string, string>) {
  try {
    const params = new URLSearchParams(data).toString();
    await fetch(`${GOOGLE_SHEET_URL}?${params}`, { mode: "no-cors" });
    return true;
  } catch {
    console.error("Form submission failed");
    return false;
  }
}
