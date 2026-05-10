---
title: Changelog
description: Stowaway release history and version notes.
---

# Changelog

All notable changes to Stowaway are documented here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.2.1

### Fixed

- **Visibility filter no longer rejects screens in state `1` or with `Animated.Value` `activityState`.** The 0.2.0 check rejected fibers whose ancestor chain had `activityState < 2`, which produced false negatives for elements on screens below the top of a stack (state `1` = transitioning/below-top) and during navigation transitions. The check now only rejects when `activityState` is the plain number `0` (fully deactivated). Animated values are skipped - they can't be read reliably from JS - and state `1` is allowed through. This fixes cases where elements like tab bar buttons or items in a horizontal scroll on a stack screen were unfindable.

## 0.2.0

### Breaking changes

**`find()` and `findAll()` now filter by visibility.** Queries skip fibers whose ancestor chain contains either `activityState < 2` (an inactive `react-native-screens` screen, e.g. a prerendered tab or background stack screen) or `style.display === 'none'`. This prevents two common false-positive patterns: matching elements on a prerendered background screen, and returning multiple matches when only one is actually on screen.

If you have tests that intentionally query prerendered or hidden subtrees, you'll need to either navigate to that screen first or restructure the test.

### New

- **`app.waitForInteractions(opts?)`** - Sleeps for a configurable delay (default 500 ms) on the test runner side. Use after `waitForElement` to give React Navigation's native-driven slide transitions time to finish before interacting. Override the delay with `{ delay: 800 }` for slower animations. Unnecessary if you've called `disableAnimations()`.

- **`app.printVisibleTree(maxDepth?)`** - A less noisy version of `printTree` that prunes inactive screen subtrees and `display: none` nodes from the output. Useful when `printTree` is overwhelming because of prerendered tabs or stack screens kept mounted in the background.

### Improved

- **`waitForElement` is now commit-driven.** It hooks `__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot` via `Runtime.addBinding` and resolves on the first React commit containing the element - typically within a few milliseconds rather than at the next 250 ms poll boundary. A polling fallback runs in parallel as a safety net, and gracefully degrades to polling-only if `Runtime.addBinding` isn't available.

- **Deep fiber trees no longer crash the bridge.** The internal walk is now iterative, so apps with 200+ levels of nesting (common in modern Expo apps with many providers) no longer hit a call stack overflow.

- **`typeText` works with more component libraries.** When `onChangeText` isn't found on the ancestor chain, it now falls back to `onChange({ nativeEvent: { text } })` (the standard React Native `TextInput` contract) and then `onChange(text)` (used by some component libraries that pass the raw string). Strictly additive - apps that use plain `onChangeText` see no change in behavior.

- **Correct CDP target selection on expo-dev-client.** When Metro exposes two pages for the same bundle ID (the dev client shell and the actual app bundle), Stowaway now connects to the actual app instead of the shell.

## 0.1.0

Initial release.
