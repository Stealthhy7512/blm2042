import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function createTables() {
await sql`
    CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      user_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      user_password VARCHAR(255) NOT NULL,
      profile_photo_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    CREATE TABLE settings (
      user_id INTEGER PRIMARY KEY REFERENCES users(user_id) ON DELETE CASCADE
      -- settings
    );
  `;

  await sql`
    -- CATEGORY Table
    CREATE TABLE category (
      category_id SERIAL PRIMARY KEY,
      category_name VARCHAR(255) UNIQUE NOT NULL
    );
  `;

  await sql`
    -- USER interested in CATEGORY
    CREATE TABLE user_interest (
       user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
       category_id INTEGER REFERENCES category(category_id) ON DELETE CASCADE,
       PRIMARY KEY (user_id, category_id)
    );
  `;

  await sql`
    -- POST Table
    CREATE TABLE post (
      post_id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      post_content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      visibility boolean
    );
  `;

  await sql`
    -- MEDIA Table / post basi 1 fotograf (varsa)
    CREATE TABLE media (
      media_url TEXT NOT NULL,
      post_id   INTEGER REFERENCES post (post_id) ON DELETE CASCADE,
      PRIMARY KEY (post_id)
    );
  `;

  await sql`
    -- COMMENT Table
    CREATE TABLE comment (
     comment_id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
     post_id INTEGER REFERENCES post(post_id) ON DELETE CASCADE,
     text TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    -- LIKE Table
    CREATE TABLE post_like (
     user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
     post_id INTEGER REFERENCES post(post_id) ON DELETE CASCADE,
     PRIMARY KEY (user_id, post_id)
    );
  `;

  await sql`
      -- COMMUNITY Table
      CREATE TABLE community (
       community_id SERIAL PRIMARY KEY,
       community_name VARCHAR(255) NOT NULL,
       community_photo_url TEXT
      );
  `;

  await sql`
    -- USER_COMMUNITY Table 
    CREATE TABLE user_community (
      user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      community_id INTEGER REFERENCES community(community_id) ON DELETE CASCADE,
      user_role VARCHAR(50) NOT NULL,
      PRIMARY KEY (user_id, community_id)
    );
  `;

  await sql`
    -- COMMUNITY POST relation
    CREATE TABLE community_post (
      post_id INTEGER PRIMARY KEY REFERENCES post(post_id) ON DELETE CASCADE,
      community_id INTEGER REFERENCES community(community_id) ON DELETE CASCADE
    );
  `;

  await sql`
    -- USER Follow USER
    CREATE TABLE user_follow (
     follower_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
     followed_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
     PRIMARY KEY (follower_id, followed_id),
     CHECK (follower_id <> followed_id) -- Cannot follow self
    );
  `;

  await sql`
    -- USER Block USER
    CREATE TABLE user_block (
      blocker_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      blocked_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      PRIMARY KEY (blocker_id, blocked_id),
      CHECK (blocker_id <> blocked_id) -- Cannot block self
    );
  `;
}

export async function GET() {
  try {
    await sql.begin(async (sql) => {
      await createTables();
    });

    return Response.json({ message: 'Tables created successfully.' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

