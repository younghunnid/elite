<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1NVXlNIGRFITYbJ5cLr4QmnJ4k3bPoRv0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Hero Image Replacement

> To update the homepage hero graphic with your own flyer:
>
> 1. Place the desired file at `assets/hero-flyer.jpg` (create the `assets`
>    directory if it doesn’t already exist). **Make sure the filename is exact
>    – no extra dots or spaces; `hero-flyer.jpg` is the only name that will be
>    looked up.**
>
>    _Tip_: if you only want to change the school page image, drop a file named
>    `school-hero.jpg` in the same `assets/` folder – it will override the
>    school banner without affecting the homepage. The school page also
>    displays this image inside a framed box; if the flyer is being cropped
>    you can either upload a differently proportioned graphic or instead
>    override the `school-lab` key via the ImageCustomizer to use a separate
>    picture, as that element now uses `object-contain` to avoid clipping.
>
>    Additionally, the same `school-hero` graphic is now reused on the
>    **About** page (the "E.C.L instructor helping a student" photo). This
>    ensures consistent branding during the initial rollout with a single
>    file. If you prefer a different photo there, set the `school-lab`
>    key instead via the admin manager and it will only affect About.
>
>    The loader will also fall back to `assets/school-gallery/hero-flyer.jpg` if
>    the first path isn’t found.
> 2. The code in `constants.tsx` attempts to resolve that path at build time
>    using `new URL('./assets/hero-flyer.jpg', import.meta.url).href`. Vite will
>    bundle the image automatically, allowing it to be served without a
>    `public/` folder. If the file is missing, a remote placeholder is used.
> 3. Restart the dev server and refresh the site. If the image still doesn’t
>    appear, check the browser network tab for a failed request to
>    `hero-flyer.jpg` and ensure the filename/path is correct.

## Dark Mode Contrast

Some of the branded blue text (e.g. `text-blue-600`, `text-blue-400`) could be hard
to read against the deep dark background in dark mode. A global override has been
added to force such text to **white**, and slate‑colored text is lightened to
`#cbd5e1`. If you want to customise this behaviour you can modify or remove the
rules in `index.html` under the `/* Dark‑mode contrast fixes */` comment.

> **Note:** earlier versions left the IT service and about pages with static
> white backgrounds, which prevented dark mode from being effective. Those two
> pages now include `dark:` variants for their containers, cards, and form
> elements so the UI respects the theme toggle just like the rest of the site.
> You can adjust the colour choices directly in `pages/it/ITServices.tsx` and
> `pages/it/ITAbout.tsx` if you need to tweak the palette further.

## Adding School Gallery Images

Drop any images you want to appear in the **School Gallery** into the
`assets/school-gallery` directory at the project root. The app uses
Vite's `import.meta.glob` to automatically include every `png`, `jpg`,
`jpeg`, or `webp` file found there. New pictures will load on the next
refresh; they are merged with the remote fallback images when the
folder is empty.

This covers the requirement to "upload all of the images to the school
gallery"—just place them in that folder and the gallery components will
render them automatically. The cards no longer force a square aspect ratio;
images are displayed with `object-contain` and their height adjusts
automatically so the entire picture is visible. This means flyer dimensions
may produce cards of varying heights, but nothing will be clipped. If you
want a uniform grid you can pre‑resize your images or reintroduce an
`aspect-square` class manually.
