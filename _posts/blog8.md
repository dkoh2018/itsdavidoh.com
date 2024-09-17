---
title: "the Go Proverbs"
date: "2024-09-16"
---

# the go proverbs

1. don't communicate by sharing memory, share memory by communicating.

2. concurrency is not parallelism.

3. channels orchestrate; mutexes serialize.

4. the bigger the interface, the weaker the abstraction.

5. make the zero value useful.

6. `interface{}` says nothing.

7. gofmt's style is no one's favorite, yet gofmt is everyone's favorite.

8. a little copying is better than a little dependency.

9. syscall must always be guarded with build tags.

10. cgo must always be guarded with build tags.

11. cgo is not go.

12. with the `unsafe` package there are no guarantees.

13. clear is better than clever.

14. reflection is never clear.

15. errors are values.

16. don't just check errors, handle them gracefully.

17. design the architecture, name the components, document the details.

18. documentation is for users.

19. don't panic.
