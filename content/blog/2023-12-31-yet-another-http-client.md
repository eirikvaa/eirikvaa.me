+++
title = "YAHC: Yet Another HTTP Client"
date = 2023-12-31
+++

**There are a lot of HTTP clients/API tools out there**. For starters, you have [Postman](https://www.postman.com/), [HTTPie](https://httpie.io/), [Paw](https://paw.cloud/), and [Insomnia](https://insomnia.rest/). Some of them do *a lot*, much more than I usually care for, so I've tested quite a few clients lately.

The first client I used was Insomnia. During my first internship at Airthings, I saw one of the seniors use it. It was quite nice, but as I've always been a sucker for nice-looking native macOS applications, I quickly looked elsewhere. Paw emerged as a beautiful candidate. It was native and flexible, and I used it for a long time.

However, Paw hasn't seen a lot of development in the last years, and I was curious if there were any better alternatives out there. For instance, it doesn't support WebSockets, which I've been using more and more in the last months. And as I've come to realize, there are a few features I need that aren't all supported by any client out there:

- Chain multiple HTTP requests together, dynamically linking requests together by tying previous responses to subsequent requests.
- WebSockets

I want to click as little as possible, and I want a nice native macOS application. So, what should a lowly programmer do when they cannot find the thing they need? Well, they make it themselves. So that's what I'm doing.

I'm not going to share any screenshots; It's not secret, just not ready yet. What it is, however, is a refreshing project to work on. It's already multi-platform -- it's working on macOS *and* iOS. It's already doing 50% of what I want it to do; what remains is supporting WebSockets. And making the code more robust. It's really exciting to work on something that I actually *need*. Also the fact that I get to work on macOS is really refreshing. So maybe _this_ is the side-project I'll actually finish. 