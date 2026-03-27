---
title: 'Week 10'
description: 'tenth week'
pubDate: 'March 13 2026'
---

<h4>General updates</h4>
    <p>
        The past spring break was pretty fun, I was able to sink some hours into the new Pokemon game Pokopia. This week the CHDR room had two events on Thursday and on Friday the scanner was booked out. This week I was able to get in around 40 metadata entries for this week which felt appropriate for how my classes are going.
    </p>
<h4>Storage Issue</h4>
    <p>
        I’ve spent a lot of time this week thinking about the storage problem Nate mentioned. Since we’ve been hitting space limits on Teams, I decided to start building out a more permanent home for our scans using something called an <b>R2 Bucket</b> from Cloudflare. To keep it simple, this is a giant, organized digital warehouse in the cloud. I picked this specific version because it’s "egress-free", meaning it won't cost the museum extra money every time someone clicks on a photo to view it.
    </p>
    <p>
        I’ve also been looking at specific ads, like one for Ellison Homes I found in the archives. Right now, we only record the volume, page number, and date for a page like this whereas the page contains data like Corbin Road or Terrazzo floors for sale. My goal with this new cloud setup is to connect it to an <b>automated indexing tool</b>. Basically, as soon as we drop a photo into the new bucket (R2 from Cloudflare), the system will "read" the page and automatically pull out those names, streets, and dates for us. It’s a bit of a (boring and infuriating T_T) process to get the "reader" connected to the "warehouse," but once it’s done, it should save us a lot of time and make everything searchable. I know I've been talking a lot about the set up but after seeing how many documents they had, I had to go and search for the best tools that would be useful for long term uploads. 
    </p>