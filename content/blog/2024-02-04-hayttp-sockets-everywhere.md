+++
title = "Hayttp: Sockets everywhere"
date = 2024-02-04
+++

I have definitely not had the same development drive with Hayttp as I had during Christmas. Nonetheless, I've made 
some progress, and I'm happy to say that for one particular development flow, Hayttp is now better than 
[Apidog](https://apidog.com/).

What I wanted to focus on was the ability to chain multiple HTTP requests together. Currently, this is done by 
making a distinction between a "request" and a "request flow". The flow only contains requests, and executing it 
executes the individual requests. Simple feature in and of itself, but I rarely see it implemented in other HTTP 
clients. This is now working, and I must say, quite nicely also. The other goal I had was supporting WebSockets, 
and this is also working now. Together, these two features allow me to execute a single flow that allows me to be 
properly authenticated towards our WebSockets server before I connect to the socket. I have to make two clicks 
instead of four, which I'm happy with. I want to get it down to one, because the app should be able to execute an 
optional flow before it connects. That would be the ideal.

I'm still not going to share any screenshots because the UI is pretty bad, I have only been focused on the feature 
set. However, going forward I want to clean up the UI and make it more user-friendly. I also need to focus more on 
the maintainability of the code, as I focused more on making it work rather than making it great in the beginning. 
But I like where this is going.