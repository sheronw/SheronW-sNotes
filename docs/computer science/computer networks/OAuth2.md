# OAuth2.0

## authentication vs authorization

not designed for authentication!

just use OpenID Connect for authentication.

## Delegated Authorization

e.g.: I authorize a third party application to get my google profile.

- **Resource owner**: user who owns resource and could authorize you to get that _(me)_

- **Client**: the application that needs to get access to resource _(third party)_

- **Authorization server**: system to authorize certain permission _(the server to login to your google account)_

- **Resource server**: server that stores resource _(profile data)_, could be the same as authorization server

- **Authorization grant**: whole workflow, proves that user has authorized

- **Redirect URI**: or callback, where should I go back at the end of the workflow

- **Access token**: client needs this to get data

## back channel vs front channel

- **backchannel**: highly secure channel _(e.g. system we can trust such as server)_

- **front channel**: less secure channel _(e.g. cannot 100% trust browser)_

- **client id**: not sensitive and could pass along front channel

- **client secret**: sensitive data

## Workflows

- **authorization code**: front + back

- **implicit**: front channel only, just get token directly without exchange step _(e.g. static single page JS application)_

- **resource owner password credentials**: to make some older systems compatible

- **client credentials**: back channel just post to authorization server directly
