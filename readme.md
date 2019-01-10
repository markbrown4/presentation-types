# 1
Hello,

# 2
I work at the tech company Ferocia, they're the people building the new digital bank of your dreams Up as well as Bendigo Bank's new app which is also quite good, but you should all download Up.  I think you'll like it.

# 3
Today, I want to share my experience working with Flow and types in JavaScript.
Now, I really didn't want to like types in js and avoided it long as possible but I ended up being convinced they help.

# 4
Here's what it looks like, You write standard JavaScript.

# 5
You add types to function params and variables with a colon and type,
And you can start to describe the shape of your objects.

# 6
You can also add return types after the round brackets.

# 7
You install Flow and run it.

# 8
And then it tells you when you've got typos and errors in your program.

# 9
That sounds helpful, so why didn't I adopt it?
The first two here are basically the same, I know JS and how I'm doing it is working well, why change?
I felt that types hurt more than they help and make JS something it wasn't designed to be.
Flow and TypeScript seemed similar to Google's Dart language which looked like JavaScript for Java programmers. It was a huge failure.  I'd also spent many years writing CoffeeScript which was overcome by ES6.
Compile to js languages were doomed to lose out it in the end.

# 10
When I started using it it took me a while to see the benefits.
I was looking for examples of code which confirmed my suspicion where types didn't seem to helping in any meaningful way.

# 11
Here's one example when the request params were typed.
But we weren't doing anything with this object, we were just passing it straight through.

# 12
If I changed the type to have monkey and jerky properties Flow wouldn't complain about it.

# 13
My thinking changed.
At first I begrudgingly added types when the build failed.
Then I started adding types for others on the team who liked them, cause I'm a nice guy.
And then Flow started picking up legitimate bugs in my code.

# 14
One time it helped was when we changed the casing of a JSON object so it was consistent with other code.  We couldn't blindly search and replace because we only wanted to replace the names when this particular transfer object was used.

# 15
So I added a type to all the functions that use this object and ran it.

# 16
It basically gave me the diff in reverse, and showed me all the places I'd missed in my manual search and replace.

# 17
Another time I'd mixed up the return types for a validator.
Other validators returned strings as errors and I'd assumed that here, but it needed an object with the field name as the key.

# 18
Now, this wasn't because we'd added types for the return value.
The return value was simply _used_ like an object because it was used with a spread operator.

# 19
It also picked up cases where a function signature was changed but the calling code wasn't updated.  This is strictly an error, it's just misleading legacy code.  Having flow watch over your shoulder and pick up things that _look_ like errors is free help.

# 20
I've had a long history of fighting with propTypes.
Like types in general, I didn't see their value and found maintaining them a pain.
This changed when I tried upgrading react-router which was a big API change. They removed features like query-string parsing and moving other props around.
I tried a couple of approaches, migrating the components to use the new props, and patching the props at the top so the components would all still work.
It wasn't until I saw all the prop-types warnings that I saw how helpful they were.

# 21
Flow offers a cleaner better way of doing propType checking.
You don't need to use a custom library and remember a new API, it's now part of the language and it's not limited to propTypes.

# 22
This is something that you're probably already aware of if you're running VS Code, but I'd been missing out.  Thanks to TypeScript your editor now has a deep understanding of JavaScript, the DOM, all popular npm packages and framework specific tooling like JSX, Vue's single file components.

I'll quickly demo some of this.

# 23
These errors happen all the time in JS.
By explicitly typing values that can be null and undefined you can finally check ahead of time that your code has sufficient run-time checks in place.

# 24
Types are getting popular.
Given the trends, you'll probably work on a project with types at some point unless you're a lone coder.

# 25
Flow didn't move much last year.
10% is still a lot though.

# 26
TypeScript on the other hand appears to be taking over the world.
Nearly half used it and would use again, that is huge.

# 27
The survey is just a snapshot of the JS community, still it shows there's a large number of happy customers.

# 28
It's moved to the number 7 language on Github.

# 29
The 3rd fastest growing

# 30
TC39 is the group that ultimately decides what JavaScript becomes, there's enough people on there with repos in TypeScript to know they're across it and won't make anything too difficult for it.

# 31
It's not all roses though, some things are difficult to type.
Here he's trying to compose types.

# 32
Having difficult and confusing types like this in your codebase may be worse than having no types.

# 33
This is just a reminder to take stock and not get ahead of ourselves.
Maybe scepticism isn't such a bad strategy after all for dealing with the trends.

# 34
I agree with the great philosopher of our time.  If something is difficult and confusing to type, it's going to be difficult for others.  In coding, few things trump simplicity and writing less code.

# 35
This is the last slide.  Types are _not_ necessary. There's a lot of great software out there written in dynamic languages like Ruby and Python.  I think the reason they work so well without types is because of conventions and good testing discipline.  Less code, small functions, naming conventions.

Types are _not_ necessary for good software, but I'm now convinced they help.

On naming conventions, what type is this isSecure variable?
items?
options?
How about \_locked?

Duck typing states that if it walks like a Duck, and quacks like a Duck then it's probably a duck.  In the lack of static types there's way to make it work.

Back in my day DOM scripting was hard, you could never be certain that the browser supported anything at all, so you needed feature detection.  I think as JS developers we got used to run type checks before we used them.   We got used to a hostile environment.

# 36
That's all I have.
Thanks.  And Download Up.
