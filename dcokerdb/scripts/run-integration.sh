docker-compose up -d
echo '🟡 - Waiting for database to be ready...'
./wait-for-it.sh "postgresql://postgres:password@localhost:2010/postgres?schema=public" -- echo '🟢 - Database is ready!'
npx prisma migrate dev --name init
npm run test
docker-compose down