-- name: CreateChannel :execresult
INSERT INTO channel (
  name, created_by
) VALUES (
   ?, ?
);

-- name: JoinChannel :execresult
INSERT INTO channel_user (
  user_id, channel_id
) VALUES (
   ?, ?
);
