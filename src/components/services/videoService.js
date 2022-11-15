import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://iyfxtckkbqagtuelvxel.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Znh0Y2trYnFhZ3R1ZWx2eGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0ODg3OTcsImV4cCI6MTk4NDA2NDc5N30.ZlD7ZZzefiRyyVoVjyeiVblb6x_Yn9ofakcm5wx9oM8";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}