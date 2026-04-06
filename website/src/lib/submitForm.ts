const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzYp6Z6TGGM64pALezESKxuBxLjyv9C6FT4LDU-oC6izNnz349g_ntcTk__LLwLbFgd/exec";

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
