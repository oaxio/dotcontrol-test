## Getting Started

First install the packages:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to open the project.

## Design feedback
- Consistent paddings 4/8/12/16/20 or 6/12/18/24/30.
- Include font files in design assets (Hard to find the design ones, so I have just used a google font).
- The api does not include a poster, so keep that in mind when designing. (Now i changed the url to get a bigger format)
- I prefer popups or new pages, instead of a changeable header on click. It looks nice, but just doesn't work clean UI wise.
- In my daily user opinion the design is too dark, it might works nice on the design. But with different images it is a completely different story
- The load more button styling is a bit weird in my opinion. It should be the same styling as the other button for consistency.

## Architecture
I would add a simple backend like firebase for example. This makes configuring a database and content fairly easy. 
For this specific application I would use Vercel for deployment since it works easily with nextjs.
Using version control and a system for tickets/pipelines/builds would be needed to collaborate on the project.