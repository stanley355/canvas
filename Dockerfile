FROM node:18-alpine as base

FROM base as deps

# Pass the environment variables to the build command
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG AUTHOR_URL
ARG AUTHOR_TOKEN
ARG APP_ENV
# ARG FIREBASE_API_KEY
# ARG FIREBASE_AUTH_DOMAIN
# ARG FIREBASE_PROJECT_ID
# ARG FIREBASE_STORAGE_BUCKET
# ARG FIREBASE_MESSAGING_SENDER
# ARG FIREBASE_APP_ID
# ARG FIREBASE_MEASUREMENT_ID
ARG NEXT_PUBLIC_OPENAI_URL
ARG NEXT_PUBLIC_OPENAI_API_KEY
ARG OPENAI_URL
ARG OPENAI_API_KEY

# Set the environment variables for the build process
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
ENV AUTHOR_URL=$AUTHOR_URL
ENV AUTHOR_TOKEN=$AUTHOR_TOKEN
ENV APP_ENV=$APP_ENV
# ENV FIREBASE_API_KEY=$FIREBASE_API_KEY
# ENV FIREBASE_AUTH_DOMAIN=$FIREBASE_AUTH_DOMAIN
# ENV FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID
# ENV FIREBASE_STORAGE_BUCKET=$FIREBASE_STORAGE_BUCKET
# ENV FIREBASE_MESSAGING_SENDER=$FIREBASE_MESSAGING_SENDER
# ENV FIREBASE_APP_ID=$FIREBASE_APP_ID
# ENV FIREBASE_MEASUREMENT_ID=$FIREBASE_MEASUREMENT_ID
ENV NEXT_PUBLIC_OPENAI_URL=$NEXT_PUBLIC_OPENAI_URL
ENV NEXT_PUBLIC_OPENAI_API_KEY=$NEXT_PUBLIC_OPENAI_API_KEY

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=bloguser:bloggroup /app/.next/standalone ./
COPY --from=builder --chown=bloguser:bloggroup /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]