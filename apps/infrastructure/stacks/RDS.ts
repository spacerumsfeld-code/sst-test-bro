import { RDS } from "sst/constructs";

new RDS(stack, "Database", {
  engine: "postgresql11.13",
  defaultDatabaseName: "my_database",
});
