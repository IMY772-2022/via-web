## 🚀 Quick start

### :package: Package Manager

#### Yarn

Before you start using Yarn, you'll first need to install it on your system. There are many different ways to install Yarn, but a single one is recommended and cross-platform:

##### Intall via NPM

It is recommended to install Yarn through the [npm package manager](http://npmjs.org/), which comes bundled with [Node.js](https://nodejs.org/) when you install it on your system.

Once you have npm installed you can run the following both to install and **upgrade** Yarn:

```bash
npm install --global yarn
```

You can verify that Yarn is installed by running:

```bash
yarn --version
```

### GitHub CLI

GitHub CLI is an easy to use command line interface for GitHub.

#### Installation

Windows

```powershell
winget install GitHub.cli
```

MacOS

```bash
brew install gh
```

#### :gear: Configuration

##### :lock: Authorisation

Run `gh auth login` to authenticate with your GitHub account. Alternatively, `gh` will respect the `GITHUB_TOKEN` environment variable.

To set your preferred editor, use `gh config set editor <editor>`. Read more about `gh config` and environment variables.

Declare your aliases for often-used commands with gh alias set.

### :earth_africa: Clone the Project

**Using Github CLI (recommended)**

In your terminal, open the directory where you want to clone the project to, and enter the command:

```bash
gh repo clone IMY772-2022/via-web
```

**GUI Client**

Alternatively, a GUI client such as GitHub Desktop can be used to clone the project. You can download it from [GitHub Desktop](https://desktop.github.com/).

The repo can also be cloned from within VSCode.

### :package: Installing Dependencies

#### Node Modules

To install all the dependencies required by the project, run the command:

**Yarn**

```bash
yarn
```

**npm**

```bash
npm install
```

#### Commitizen CLI

First, install the Commitizen CLI tools:

```bash
npm install commitizen -g
```

#### Gatsby CLI

In order to develop a Gatsby project, you need to install the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/):

```bash
npm install -g gatsby-cli
```

### :vertical_traffic_light: Run the Project

(in the project directory) run the following command:

**Yarn**

```bash
yarn start
```

**npm**

```bash
gatsby develop
```

### Commmitting Changes

**Code must NEVER be commited directly to the `main` branch.**

The Commitizen CLI can be used to help with formatting of commit messages.

To use Commitizen, run the following command:

```bash
cz
```

You can the follow the on screen instructions to commit your code.

- use `feature` for new features
- use `fix` for bugfixes
- use `refactor` for structure/logic changes
- use `docs` for documentation changes
- use `chore` for non-code changes

**Please note:** commit messages should be in imperative tense, for e.g.,

```bash
feature: add initial home screen implementation
fix: cart button alignment
refactor: cart button display logic
```

If the changes are more complex, you can provide additional information on how the code changed.

Any breaking changes can be indicated at the relevant prompt.

### Pull Requests

Code changes can be merged into the `develop` branch.

Pull request templates are set up on GitHub. In general, PRs can only be merged when:

- [ ] Someone other than the author has reviewed and approved the changes
- [ ] All the build checks from Amplify has completed successfully
- [ ] The branch is synched with the latest changes from the `develop` branch **(optional)**

### :palm_tree: Branching Rules

Whenever a new feature or bugfix is added, a new branch is added, with `develop` as the base branch. For e.g.,

```
main
 develop
   |
   |-- feature/add-initial-home-screen
   |-- fix/cart-button-alignment
```

- use `feature` for new features
- use `fix` for bugfixes
- use `refactor` for structure/logic changes
- use `docs` for documentation changes
- use `chore` for non-code changes

### :closed_book: Style Guide

```tsx
import React from "react"
import "./ExampleComponet"

import { GetSubscriptions } from "../../utils.ts"
import { DATE_FORMAT } from "../types.ts"
import { useSubscription } from "./hooks.ts"

const DATE_FORMAT = "YYYY-MM-DD"

const ExampleComponent: React.FC = () => {
  return (
    <>
      <h1>Example Component</h1>
    </>
  )
}

export default ExampleComponent
```

#### :card_index_dividers: Folder Structure

Grouped per component, with global styles, utils, and types in the `src` folder.

```bash
node_modules/
src/
    components/
        Dashboard/
            Dashboard.tsx
            Dashboard.scss
            hooks.ts
            types.ts
        Home/
            Home.tsx
            Home.scss
            types.ts
    style.scss
    index.tsx
    types.ts
    utils.ts
package.json
```
