// Content for the one-page Learning & development demo (exported from customer-demos by tools/export_learning.py).
const SITE = {
  partner: "",
  title: "VEED API",
};

const DOCS = "https://api.veed.io/docs/api/";

const PAGES = [
  {
    id: "learning", file: "index.html", name: "Learning & development", badge: "Use case",
    short: "Training videos without a film crew",
    tagline: "Training videos without a film crew",
    summary: "Onboarding, safety, compliance and leadership courses as short 16:9 presenter videos. A photo and a script make the video; the same video then goes out in every language, gets captions, goes vertical for mobile, and is updated by changing the script, never by reshooting.",
    usecases: [
      {
        title: "From a photo and a script", layout: "io", note: "One presenter image plus a narrated script becomes a 25-second onboarding welcome.", api: ["/v1/fabric-1.0", DOCS + "post-v1-fabric-1-0"],
        cards: [
          { label: "Presenter image", tag: "Input", kind: "image", wide: true, file: "inputs/personas/ld-onboarding.jpg" },
          { label: "Script, narrated", tag: "Input", kind: "audio", file: "inputs/voices/ld-onboarding.mp3" },
          { label: "Onboarding welcome", tag: "Fabric 1.0", result: true, wide: true, file: "outputs/learning/ld-onboarding.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
        ],
      },
      {
        title: "A presenter for every course", note: "Four courses, four presenters, each about 30 seconds in landscape: ready for an LMS, an intranet or a slide deck.",
        cards: [
          { label: "Onboarding · Your first week", tag: "Fabric 1.0", result: true, wide: true, span2: true, file: "outputs/learning/ld-onboarding.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
          { label: "Health & safety · Safe lifting", tag: "Fabric 1.0", result: true, wide: true, span2: true, file: "outputs/learning/ld-safety.mp4", poster: "inputs/personas/ld-safety.jpg" },
          { label: "Security awareness · Spot a phishing email", tag: "Fabric 1.0", result: true, wide: true, span2: true, file: "outputs/learning/ld-cyber.mp4", poster: "inputs/personas/ld-cyber.jpg" },
          { label: "Leadership · Giving feedback", tag: "Fabric 1.0", result: true, wide: true, span2: true, file: "outputs/learning/ld-leadership.mp4", poster: "inputs/personas/ld-leadership.jpg" },
        ],
      },
      {
        title: "One course, every office", note: "The onboarding video dubbed with Dubbing Pro: the presenter's own voice, translated, with the lips re-synced. One call per language.", api: ["/v1/dubbing-pro", DOCS + "post-v1-dubbing-pro"],
        cards: [
          { label: "English", tag: "Original", wide: true, span2: true, file: "outputs/learning/ld-onboarding.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
          { label: "Spanish", tag: "Dubbing Pro", result: true, wide: true, span2: true, file: "outputs/learning/ld-onboarding-es.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
          { label: "French", tag: "Dubbing Pro", result: true, wide: true, span2: true, file: "outputs/learning/ld-onboarding-fr.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
          { label: "German", tag: "Dubbing Pro", result: true, wide: true, span2: true, file: "outputs/learning/ld-onboarding-de.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
        ],
      },
      {
        title: "Captions for noisy sites and sound-off viewing", note: "Burned-in captions so the safety course works on a warehouse floor, on mute, and for every learner.", api: ["veed/subtitles on fal", "https://fal.ai/models/veed/subtitles"],
        cards: [
          { label: "Safe lifting", tag: "Original", wide: true, span2: true, file: "outputs/learning/ld-safety.mp4", poster: "inputs/personas/ld-safety.jpg" },
          { label: "Safe lifting", tag: "Captioned", result: true, wide: true, span2: true, file: "outputs/learning/ld-safety-captions.mp4", poster: "inputs/personas/ld-safety.jpg" },
        ],
      },
      {
        title: "Vertical for mobile learning", layout: "rv", note: "The leadership video reframed to 9:16 with captions, for learning apps, Teams and phone-first microlearning. The speaker stays centred in frame. Reframe is coming to the API.",
        cards: [
          { label: "Leadership · Giving feedback", tag: "16:9", wide: true, file: "outputs/learning/ld-leadership.mp4", poster: "inputs/personas/ld-leadership.jpg" },
          { label: "Reframed", tag: "9:16 · Captions", result: true, file: "outputs/learning/ld-leadership-9x16.mp4", poster: "outputs/learning/ld-leadership-9x16.jpg" },
        ],
      },
      {
        title: "Clear audio from the shop floor", note: "The safety briefing recorded next to forklifts and machinery. Clean Audio removes the warehouse noise and keeps the voice.", api: ["/v1/clean-audio-video", DOCS + "post-v1-clean-audio-video"],
        cards: [
          { label: "Recorded on site", tag: "Noisy", wide: true, span2: true, file: "outputs/learning/ld-safety-noisy.mp4", poster: "inputs/personas/ld-safety.jpg" },
          { label: "Cleaned", tag: "Clean Audio", result: true, wide: true, span2: true, file: "outputs/learning/ld-safety-clean.mp4", poster: "inputs/personas/ld-safety.jpg" },
        ],
      },
      {
        title: "Update a course without reshooting", layout: "io", note: "The process changed, so the script changes. The existing onboarding video gets the new audio and Lipsync 2.0 re-syncs the presenter's mouth.", api: ["/v1/lipsync-2.0", DOCS + "post-v1-lipsync-2-0"],
        cards: [
          { label: "Existing video", tag: "From Fabric", wide: true, file: "outputs/learning/ld-onboarding.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
          { label: "Updated script, narrated", tag: "Input", kind: "audio", file: "inputs/voices/ld-onboarding-update.mp3" },
          { label: "Updated video", tag: "Lipsync 2.0", result: true, wide: true, file: "outputs/learning/ld-onboarding-update.mp4", poster: "inputs/personas/ld-onboarding.jpg" },
        ],
      },
    ],
  },
];
