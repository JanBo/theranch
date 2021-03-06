# Getting Started with Amplify CLI
This directory was generated by [Amplify CLI](https://docs.amplify.aws/cli).

<h3>To get started if you are a new user trying to work on this project:</h3>
reference: https://janhesters.com/multiple-environments-with-aws-amplify

1. Login to your AWS account
2. Download Amplify CLI
   1. `npm install -g @aws-amplify/cli`
3. Make sure owner of Amplify repository has added you as a user to the project
4. Clone the github repository into a new directory and run yarn install
   1. `git clone https://github.com/JanBo/theranch folder_name_here && cd`
5. run `amplify init`
6. When prompted, choose to use "existing environment"
   1. choose `prod` as existing environment

<h3>To make changes and run local environment once setup:</h3>
1. Make sure you have `yarn` or `npm` installed 
2. Make sure you have `node` installed
3. Run `yarn install` 
4. Run `yarn start` to launch a devshell where any saved changes will be reflected by the local server
5. Open your designated local host to see website and your changes.
   1. usually `localhost:3000`






Helpful resources:
- Amplify documentation: https://docs.amplify.aws
- Amplify CLI documentation: https://docs.amplify.aws/cli
- More details on this folder & generated files: https://docs.amplify.aws/cli/reference/files
- Join Amplify's community: https://amplify.aws/community/
