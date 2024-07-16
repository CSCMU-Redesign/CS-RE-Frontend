docker build -t cs-re-frontend:latest .
docker run --name cs-re-frontend -p 3000:5173 -d cs-re-frontend:latest