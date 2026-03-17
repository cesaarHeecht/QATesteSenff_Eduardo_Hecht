create table test_client(
    test_users VARCHAR(100),
    test_address VARCHAR(255),
    test_mails VARCHAR(150),
    age int
);

/*insert gerado por IA*/
INSERT INTO test_client (test_users, test_address, test_mails, age) VALUES
('João Silva', 'São Paulo - SP', 'joao.silva@email.com', 32),
('Maria Souza', 'Belo Horizonte - MG', 'maria.souza@email.com', 45),
('Carlos Lima', 'Rio de Janeiro - RJ', 'carlos.lima@email.com', 28),
('Ana Pereira', 'São Paulo - SP', 'ana.pereira@email.com', 37),
('Pedro Santos', 'Curitiba - PR', 'pedro.santos@email.com', 52),
('Juliana Costa', 'Belo Horizonte - MG', 'juliana.costa@email.com', 41),
('Roberto Alves', NULL, 'roberto.alves@email.com', 80),
('Marcelo Pedroso', NULL, 'marcelo.pedroso@email.com', 74),
('Fernanda Rocha', 'Porto Alegre - RS', 'fernanda.rocha@email.com', 29),
('Lucas Martins', 'São Paulo - SP', 'lucas.martins@email.com', 34),
('Patricia Gomes', '', 'patricia.gomes@email.com', 77);


SELECT * FROM test_client where test_address LIKE '%São Paulo%';

UPDATE test_client set test_mails = 'silva.joao@email.com' where test_users = 'João Silva'; 

SELECT * FROM test_client where test_address is null;

DELETE FROM test_client where test_address is null and age > 75;

select * from test_client where test_address LIKE '%Belo Horizonte%';

select AVG(age) AS media_idade FROM test_client where test_address LIKE '%Belo Horizonte%';