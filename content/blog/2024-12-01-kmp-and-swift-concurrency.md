+++
title = "On Kotlin Multiplatform and Swift Concurrency"
date = 2024-12-01
draft = true
+++

Recently at work, we debated whether to introduce presentation models into our architecture in addition to domain models
and network models. Personally, I have been concerned about having too many unnecessary mappings, but today I
realized why a mapping can be useful between the domain and the presentation layer, and it concerns Kotlin
Multiplatform.

In Kotlin Multiplatform (KMP from here), you write your business logic in a shared library written in Kotlin. This
library is then consumed by Android and iOS. So your domain models are declared in Kotlin and then mapped to Swift
objects through a layer of Objective-C.

Lately I've been trying to _really_ understand the changes coming in Swift 6, and for this I started looking at the
wonderful introduction by Matt, which you can find [here](https://www.massicotte.org/step-by-step-network-request).
A big point is _actor isolation_ and how we can adapt our code to make the `MainActor` responsible for
handling UI work, but then taking other work _off_ the `MainActor`, for instance network requests. I'm not well-versed
in actor isolation, but if you want to move objects between actors like mentioned above, then that
object needs to be `Sendable`. Which brings us to the core issue.

The problem occurs when you execute a network request, and that function returns a domain model coming from the
shared Kotlin library. That object will not be declared as `Sendable`, and it seems like you're not able to conform
it to this protocol in the iOS part. That gives you the following error:

> Conformance to 'Sendable' must occur in the same source file as class 'MyDomainModel'; use '@unchecked Sendable'
> for retroactive conformance; this is an error in the Swift 6 language mode

Thus, a presentation model could come into play. Instead of using the domain model in the presentation layer, we add
a new presentation model, say `MyPresentationModel`. When it comes to Swift code relying on a KMP framework, this
model we have full control over. We can make sure to only use the properties we actually care about in this
particular view, but most importantly, we can make sure that convert the domain model to this presentation model
_before_ we move it over to the `MainActor`.
