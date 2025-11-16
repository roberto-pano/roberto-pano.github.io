FROM node:20-bullseye

# Create app directory
WORKDIR /app

# Use Corepack to enable pnpm and activate the pinned version in package.json
# This keeps the image deterministic and uses the repo's pnpm-lock.yaml
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and lockfile first for better layer caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm (frozen lockfile for reproducible installs)
RUN pnpm install --frozen-lockfile --reporter=silent

# Copy the rest of the sources
COPY . .

# Default CI command: lint, typecheck, tests, build (using pnpm)
CMD ["sh", "-c", "pnpm run lint && pnpm run typecheck && pnpm test && pnpm run build"]
