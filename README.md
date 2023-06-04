### Broad Architecture and Organization

1. NX Monorepo to keep code organized and use some level of opionated structure
2. Client: NextJS App harnessing React18 and server render where possible. Tailwind.
3. IAC: AWS ecosystem from the start to save cost and use a full suite of easily spun up, cohesive resources so that app is good from day 1, day 100, and day 1000 (versus Vercel where we'd need to pivot later).
4. Specifically, SST to use sensible defaults and less bullshit DX to specify resources.
5. Infrastructure app for slow-moving, one-time infrastructure that does not change.
6. Backend app for fast-moving, frequently changing backend code -- lambdas and/or graphql resolvers.
7. Hexagonal architecture: core business logic in "libs" which are "services" in line with domain driven design, data access in "libs"", and apps are just glue code.
8. CI/CD: Undetermined. Amazon as well? NX to detect code changes and cache builds, only redeploy when we must..
9. Testing: Unit tests at "lib" level for each service.
10. Integration test: Call up either lambda endpoints in "apis" or graphql resolvers. Either way, test chunks of business code.
11. E2E: Cypress to test the whole app. NX will pivot us in this direction.

Unknowns:

1. Admin app?
2. Auth?
3. Monitoring?
4. Analytics?
5. How many environments?
6. How to handle secrets?
7. Dockerization
8. Local development: SST/Docker
